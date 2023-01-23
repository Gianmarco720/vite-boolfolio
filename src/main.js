import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faChevronLeft, faHouse, faSwatchbook, faBarsStaggered, faEnvelope, faSquareGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
