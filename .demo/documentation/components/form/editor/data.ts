import { ref } from 'vue'

export const editorConfig = {
  fontFamily: {
    options: ['"Inter", sans-serif', '"Roboto", sans-serif'],
  },
}

export const editorData = ref(`
  <h2>The three greatest things you learn from travelling</h2>

  <p>Like all the great things on earth travelling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of travelling.</p>

  <figure class="image image-style-side"><NuxtImg src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="A lone wanderer looking at Mount Bromo volcano in Indonesia.">
    <figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption>
  </figure>

  <h3>Appreciation of diversity</h3>

  <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>

  <blockquote>
    <p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p>
    <p><strong>Marcel Proust</strong></p>
  </blockquote>

  <h3>Improvisation</h3>

  <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up, and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>

  <ul>
    <li>buy the ticket</li>
    <li>start your adventure</li>
  </ul>

  <figure class="image image-style-side"><NuxtImg src="https://images.pexels.com/photos/2967596/pexels-photo-2967596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Three Monks walking on ancient temple.">
    <figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption>
  </figure>

  <h3>Confidence</h3>

  <p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, travelling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>
`)
