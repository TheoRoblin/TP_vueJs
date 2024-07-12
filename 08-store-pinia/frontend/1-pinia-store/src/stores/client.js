import {clientInterface} from '@/interfaces/client.js'
import {defineStore} from 'pinia'


export const useClientStore = defineStore('clients', {
    state: () => ({
        items: null,
        item: null,
        loading: false
    }),
    getters: {},
    actions: {
        async getClientItems() {
            this.loading = true
            try {
                const response = await this.$http.get('/clients')
                this.items = response.data
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },

        async setClientItem(id) {
            if (id === 'new') {
                this.item = {...clientInterface}
            } else {
                this.loading = true
                try {
                    const response = await this.$http.get('/clients/' + id)
                    this.item = response.data
                    this.loading = false
                } catch (error) {
                    console.log(error)
                    this.loading = false
                }
            }
        },

        async updateClientItem(form) {
            this.loading = true;
            try {
                const response = await this.$http.put(`/clients/${form.id}`, form);
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },

        async createClientItem(form) {
            this.loading = true
            try {
                const response = await this.$http.post('/clients', form)
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },

        async deleteClientItem(id) {
            this.loading = true
            console.log("coucou")
            try {
                const response = await this.$http.delete(`/clients/${id}`)
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }

            this.items = this.items.filter((item) => item.id != id)
            this.loading = false
        }
    }
})
