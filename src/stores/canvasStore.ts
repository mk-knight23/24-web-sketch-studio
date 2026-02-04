import { defineStore } from 'pinia'

export interface Point {
  x: number
  y: number
}

export interface Shape {
  id: string
  type: 'pen' | 'rect' | 'circle' | 'line'
  points?: number[]
  x?: number
  y?: number
  width?: number
  height?: number
  radius?: number
  stroke: string
  strokeWidth: number
}

export interface Layer {
  id: string
  name: string
  visible: boolean
  locked: boolean
  shapes: Shape[]
}

interface CanvasState {
  activeTool: string
  strokeColor: string
  strokeWidth: number
  layers: Layer[]
  activeLayerId: string
  history: any[]
  historyIndex: number
  isDrawing: boolean
  currentShape: Shape | null
}

export const useCanvasStore = defineStore('canvas', {
  state: (): CanvasState => ({
    activeTool: 'pen',
    strokeColor: '#3b82f6',
    strokeWidth: 4,
    layers: [
      { id: '1', name: 'Background', visible: true, locked: false, shapes: [] },
      { id: '2', name: 'Layer 1', visible: true, locked: false, shapes: [] }
    ],
    activeLayerId: '2',
    history: [],
    historyIndex: -1,
    isDrawing: false,
    currentShape: null
  }),
  getters: {
    activeLayer: (state): Layer | undefined => {
      return state.layers.find(l => l.id === state.activeLayerId)
    },
    allShapes: (state): Shape[] => {
      const shapes: Shape[] = []
      state.layers.forEach(layer => {
        if (layer.visible) {
          shapes.push(...layer.shapes)
        }
      })
      return shapes
    }
  },
  actions: {
    setTool(tool: string) {
      this.activeTool = tool
    },
    setColor(color: string) {
      this.strokeColor = color
    },
    setWidth(width: number) {
      this.strokeWidth = width
    },
    toggleLayerVisibility(id: string) {
      const layer = this.layers.find(l => l.id === id)
      if (layer) layer.visible = !layer.visible
    },

    // Drawing actions
    startDrawing(pos: Point) {
      if (this.activeTool === 'select') return

      const layer = this.activeLayer
      if (!layer || layer.locked || !layer.visible) return

      this.isDrawing = true
      const shapeId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      switch (this.activeTool) {
        case 'pen':
          this.currentShape = {
            id: shapeId,
            type: 'pen',
            points: [pos.x, pos.y],
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth
          }
          break
        case 'rect':
          this.currentShape = {
            id: shapeId,
            type: 'rect',
            x: pos.x,
            y: pos.y,
            width: 0,
            height: 0,
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth
          }
          break
        case 'circle':
          this.currentShape = {
            id: shapeId,
            type: 'circle',
            x: pos.x,
            y: pos.y,
            radius: 0,
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth
          }
          break
      }
    },

    continueDrawing(pos: Point) {
      if (!this.isDrawing || !this.currentShape) return

      switch (this.currentShape.type) {
        case 'pen':
          if (this.currentShape.points) {
            this.currentShape.points.push(pos.x, pos.y)
          }
          break
        case 'rect':
          if (this.currentShape.x !== undefined && this.currentShape.y !== undefined) {
            this.currentShape.width = pos.x - this.currentShape.x
            this.currentShape.height = pos.y - this.currentShape.y
          }
          break
        case 'circle':
          if (this.currentShape.x !== undefined && this.currentShape.y !== undefined) {
            const dx = pos.x - this.currentShape.x
            const dy = pos.y - this.currentShape.y
            this.currentShape.radius = Math.sqrt(dx * dx + dy * dy)
          }
          break
      }
    },

    endDrawing() {
      if (!this.isDrawing || !this.currentShape) return

      const layer = this.activeLayer
      if (layer && !layer.locked && layer.visible) {
        // Only add shape if it has meaningful dimensions
        let shouldAdd = false

        switch (this.currentShape.type) {
          case 'pen':
            shouldAdd = (this.currentShape.points?.length || 0) > 2
            break
          case 'rect':
            shouldAdd = Math.abs(this.currentShape.width || 0) > 2 && Math.abs(this.currentShape.height || 0) > 2
            break
          case 'circle':
            shouldAdd = (this.currentShape.radius || 0) > 2
            break
        }

        if (shouldAdd) {
          layer.shapes.push({ ...this.currentShape })
          this.saveToHistory()
        }
      }

      this.isDrawing = false
      this.currentShape = null
    },

    saveToHistory() {
      // Simple history implementation - could be enhanced
      this.historyIndex++
      this.history = this.history.slice(0, this.historyIndex)
      this.history.push(JSON.parse(JSON.stringify(this.layers)))

      // Limit history size
      if (this.history.length > 50) {
        this.history.shift()
        this.historyIndex--
      }
    },

    undo() {
      if (this.historyIndex > 0) {
        this.historyIndex--
        this.layers = JSON.parse(JSON.stringify(this.history[this.historyIndex]))
      }
    },

    redo() {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++
        this.layers = JSON.parse(JSON.stringify(this.history[this.historyIndex]))
      }
    },

    clearCanvas() {
      const layer = this.activeLayer
      if (layer) {
        layer.shapes = []
        this.saveToHistory()
      }
    },

    addLayer() {
      const newId = (this.layers.length + 1).toString()
      this.layers.push({
        id: newId,
        name: `Layer ${newId}`,
        visible: true,
        locked: false,
        shapes: []
      })
      this.activeLayerId = newId
    },

    setActiveLayer(id: string) {
      if (this.layers.find(l => l.id === id)) {
        this.activeLayerId = id
      }
    }
  }
})
