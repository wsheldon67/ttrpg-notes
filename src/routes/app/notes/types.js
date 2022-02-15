export const cats = {
  quick: (note) => {
    return {
      title: 'Quick Note',
      attributes: {}
    }
  },
  npc: (note) => {
    return {
      title: `NPC - ${note.name}`,
      attributes: {}
    }
  }
}