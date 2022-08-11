import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";


class ProfilesService
{
    async getProfile(id){
        const res = await api.get(`/api/profiles/${id}`);
        AppState.activeProfile = res.data;
    }
    async getUsersKeeps(id){
        const res = await api.get(`/api/profiles/${id}/keeps`);
        AppState.activeUsersKeeps = res.data;
    }
    async getUsersVaults(id){
        const res = await api.get(`/api/profiles/${id}/vaults`);
        AppState.activeUsersVaults = res.data;
    }
}

export const profilesService = new ProfilesService();