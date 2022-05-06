import { l,k } from "../../kll/index.mjs"

/**
 * TODO
 * 
 * Il est possible qu'au lieu de rendre 2 l,on mettentles éléments de changement dans
 * le state et modifier ainsi le tag et les contenu.
 * FAIRE un click qui ouvre une modale.
 */
const Help = {
    state: {
        isOpen : true,
        title: 'nin',
    },
    handleClick:(state)=>{
        console.log('OK')
        state.isOpen = !state.isOpen
        console.log(state)
        state.title =state.isOpen ? 'nin':'oui'
    },
    view: (state)=>(
        state.isOpen ? l({tag:'button',attrs:{onClick:()=> Help.handleClick(state)}},state.title):
            l({tag: 'div',attrs:{onClick:()=> Help.handleClick(state)}},state.title)
    )

}

export default k(Help)