import { create } from "zustand"

export const useTeamStore = create((set) => ({
  selectedPlayers: [],
  captain: null,
  viceCaptain: null,

  teams: {},

  setPlayers: (players) => set({ selectedPlayers: players }),
  setCaptain: (p) => set({ captain: p }),
  setViceCaptain: (p) => set({ viceCaptain: p }),

  saveTeam: (matchId, team) =>
    set((state) => ({
      teams: {
        ...state.teams,
        [matchId]: [...(state.teams[matchId] || []), team]
      }
    })),

  deleteTeam: (matchId, index) =>
    set((state) => ({
      teams: {
        ...state.teams,
        [matchId]: state.teams[matchId].filter((_, i) => i !== index)
      }
    })),

  loadTeam: (team) =>
    set({
      selectedPlayers: team.players,
      captain: team.captain,
      viceCaptain: team.viceCaptain
    }),

  reset: () =>
    set({
      selectedPlayers: [],
      captain: null,
      viceCaptain: null
    })
}))
