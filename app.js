document.addEventListener('DOMContentLoaded',() => {
    const item = document.querySelector('.item'),
          placeholder = document.querySelectorAll('.placeholder')


    const addAction = (value,actionType,func) => {
        value.addEventListener(`${actionType}`,func)
    }

    const start = (e) => {
        const element = e.target

        element.classList.add("hold")
        setTimeout(() => element.classList.add("hide"),0)
    }

    const end = (e) =>  {
        const element = e.target

        element.classList.remove("hide","hold")
    }

    const over = (e) => {
        e.preventDefault()
    }

    const enter = (e) => {
        e.target.classList.add("hovered")
    }

    const leave = (e) => {
        e.target.classList.remove("hovered")
    }

    const drop = (e) => {
        e.target.append(item) 
    }

    addAction(item,"dragstart",start)
    addAction(item,"dragend",end)

    placeholder.forEach(value => {
        addAction(value,"dragover",over)
        addAction(value,"dragenter",enter)
        addAction(value,"dragleave",leave)
        addAction(value,"drop",drop)
    })

})