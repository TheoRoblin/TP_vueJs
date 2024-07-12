<template>
  <div class="table-responsive">
    <table class="table">
      <thead v-if="head === 'bill'">
        <tr>
          <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
          <slot name="thead">
            <th>Date</th>
            <th>Description</th>
            <th>Client</th>
            <th class="text-end">Prix HT</th>
            <th class="text-end">Prix TTC</th>
            <th class="text-end">Actions</th>
          </slot>
        </tr>
      </thead>
      <thead v-if="head === 'client'">
        <tr>
          <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
          <slot name="thead">
            <th>Prenom</th>
            <th>Nom</th>
            <th>Nom de l'entreprise</th>
            <th class="text-end">Actions</th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <!-- affichage des lignes de tableau dans le slot par défaut -->
        <slot />
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: ['head']
}
</script>
