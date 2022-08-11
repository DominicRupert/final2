import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  keeps: null,
	activeKeep: null,
	myVaults: null,
	activeProfile: null,
	activeUsersKeeps: null,
	activeUsersVaults: null,
	activeVaultKeeps: null,
	activeVault: null
})
