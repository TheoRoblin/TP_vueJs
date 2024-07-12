<template>
  <div>
    <div class="bill" v-if="!loading && client">
      <div class="row border-bottom pb-3 mb-3">
        <div class="col">
          <h1 v-if="isNewBill" class="h3">
            <i class="fa-solid fa-angle-down me-2"/>Ajouter un client
          </h1>
          <h1 v-else class="h3"><i class="fa-solid fa-angle-down me-2"/>Editer un client</h1>
        </div>
        <div v-if="!isNewBill" class="col text-end">
          <button @click="onDeleteBill(client)" class="btn btn-outline-danger mx-2">
            <i class="fa-solid fa-trash me-2"/>Supprimer la facture
          </button>
          <button class="btn btn-outline-primary">
            <RouterLink class="nav-link" aria-current="page" to="/clients"><i class="fa-solid fa-angle-left"/> Retour</RouterLink>
          </button>
        </div>
      </div>

      <div class="alert alert-danger my-3" v-if="error">Un champ requière votre attention</div>

      <h3>Contact</h3>

      <div class="col">
        <div class="col-md-9">
          <div class="d-flex justify-content-start">
            <div class="form-floating mb-3">
              <input
                  type="date"
                  name="date"
                  id="date"
                  class="form-control"
                  placeholder="Date"
                  v-model="client.date"
                  :class="{ 'is-invalid': !client.date }"
              />
              <label for="date" class="form-label">Enregistrer le : </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    v-model="client.firstName"
                    class="form-control"
                    placeholder="Prénom..."
                    :class="{ 'is-invalid': !client.firstName }"
                />
                <label for="firstName" class="form-label">Prénom</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    v-model="client.lastName"
                    class="form-control"
                    placeholder="Nom..."
                    :class="{ 'is-invalid': !client.lastName }"
                />
                <label for="lastName" class="form-label">Nom</label>
              </div>

            </div>

          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="fonction"
                    id="fonction"
                    v-model="client.function"
                    class="form-control"
                    placeholder="Fonction"
                    :class="{ 'is-invalid': !client.function }"
                />
                <label for="fonction" class="form-label">Fonction</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="number"
                    name="telephone"
                    id="telephone"
                    v-model="client.telephone"
                    class="form-control"
                    placeholder="Téléphone"
                    :class="{ 'is-invalid': !client.telephone }"
                />
                <label for="telephone" class="form-label">Téléphone</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-floating mb-3">
              <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="client.email"
                  class="form-control"
                  placeholder="E-mail"
                  :class="{ 'is-invalid': !client.email }"
              />
              <label for="email" class="form-label">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="form-floating mb-3">
              <input
                  type="text"
                  name="entreprise"
                  id="entreprise"
                  v-model="client.companyName"
                  class="form-control"
                  placeholder="Entreprise"
                  :class="{ 'is-invalid': !client.companyName }"
              />
              <label for="entreprise" class="form-label">Entreprise</label>
            </div>
          </div>
        </div>

        <h3>Coordonnées</h3>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="adresse1"
                    id="adresse1"
                    v-model="client.address.address1"
                    class="form-control"
                    placeholder="Adresse 1"
                    :class="{ 'is-invalid': !client.address.address1 }"
                />
                <label for="adresse1" class="form-label">Adresse 1</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="adresse2"
                    id="adresse2"
                    v-model="client.address.address2"
                    class="form-control"
                    placeholder="Adresse 2"
                    :class="{ 'is-invalid': !client.address.address2 }"
                />
                <label for="adresse2" class="form-label">Adresse 2</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="number"
                    name="codePostale"
                    id="codePostale"
                    v-model="client.address.postCode"
                    class="form-control"
                    placeholder="Code postal"
                    :class="{ 'is-invalid': !client.address.postCode }"
                />
                <label for="codePostale" class="form-label">Code postal</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="ville"
                    id="ville"
                    v-model="client.address.city"
                    class="form-control"
                    placeholder="Ville"
                    :class="{ 'is-invalid': !client.address.city }"
                />
                <label for="ville" class="form-label">Ville</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                    type="text"
                    name="pays"
                    id="pays"
                    v-model="client.address.country"
                    class="form-control"
                    placeholder="Pays"
                    :class="{ 'is-invalid': !client.address.country }"
                />
                <label for="pays" class="form-label">Pays</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <p class="text-end">
      <button @click="onSave()" :disabled="formInvalid" class="btn btn-outline-primary btn-lg px-5">
        <i class="fa-solid fa-save me-2"/>Enregistrer
      </button>
    </p>

    <AppDebug :datas="client"/>
  </div>
</template>

<script>
import TableList from '@/components/tables/TableList.vue'
import {clients} from '@/seeds/clients.js'
import {mapActions, mapState, mapWritableState} from 'pinia'
import {useClientStore} from "@/stores/client.js";

export default {
  components: {
    TableList
  },
  props: {
    id: {
      type: String,
      default: 'new'
    }
  },
  data() {
    return {
      clients,
      error: false
    }
  },
  mounted() {
    // avant de monter le composant de la vue, on charge les données de la facture à éditer
    this.setClient(this.id)
  },
  computed: {
    // le formulaire local 'bill' est mappé sur la donnée du store 'item'
    // attention, pour pouvoir modifier les données d'un état du store (stae), il faut utiliser mpaWritableState plutôt que mapState (qui est pour la lecture seule)
    ...mapState(useClientStore, {
      loading: 'loading'
    }),
    ...mapWritableState(useClientStore, {
      client: 'item',
    }),
    // ici on a une computed classique
    isNewBill() {
      return this.id === 'new'
    },

    formInvalid() {
      return (
          !this.client ||
          !this.client.firstName ||
          !this.client.lastName ||
          !this.client.function ||
          !this.client.telephone ||
          !this.client.email ||
          !this.client.companyName ||
          !this.client.address.address1 ||
          !this.client.address.address1 ||
          !this.client.address.postCode ||
          !this.client.address.city ||
          !this.client.address.country
      )
    },
  },
  methods: {
    // pour pouvoir appeler une action du store, il faut l'importer et ici on lui donne un nom local différent 'setBill'
    ...mapActions(useClientStore, {
      setClient: 'setClientItem',
      updateClient: 'updateClientItem',
      createClient: 'createClientItem',
      deleteClient: 'deleteClientItem'
    }),


    onDeleteBill() {
      this.deleteClient(this.id)
      this.$router.push({name: 'clients'})
    },
    async onSave() {
      // si j'ai une erreur dans le formulaire
      if (this.formInvalid) {
        // gestion des erreurs ici
        this.error = true
      } else {
        this.error = false
        // on appelle la méthode de sauvegarde de la donnée du store
        if (this.isNewBill) {
          console.log('create', this.client)
          await this.createClient(this.client)
        } else {
          console.log('update', this.client)
          await this.updateClient(this.client)
        }
        // on revient sur la page précédente
        this.$router.push({name: 'clients'})
      }
    }
  },
  watch: {}
}
</script>
