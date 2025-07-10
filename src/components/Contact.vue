<template>
  <section id="contact" class="py-20 px-4">
    <div class="max-w-xl mx-auto">
      <h3 class="text-3xl font-bold mb-12 text-center text-beige">Contact</h3>
      
      <form class="space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          class="w-full bg-dark text-beige border border-[#333] p-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Votre email"
          class="w-full bg-dark text-beige border border-[#333] p-3 rounded"
          required
        />

        <textarea
          placeholder="Votre message"
          class="w-full bg-dark text-beige border border-[#333] p-3 rounded"
          rows="5"
          required
        ></textarea>

        <label class="block text-sm text-beige">
          <input type="checkbox" class="mr-2" />
          Je souhaite faire une demande de devis
        </label>

        <button
          type="submit"
          class="bg-beige text-black px-6 py-3 rounded hover:bg-white transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>
