const nav = document.querySelector('.nav-list')
const navAll = document.querySelectorAll('.nav-item')
const btn = document.querySelector('.chevron-btn')
const arrow = document.querySelector('.fas')

const handleNav = () => {
	nav.classList.toggle('nav-toggle')

	navAll.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-toggle')
		})
	})

	navItemAnimation()
}

const navItemAnimation = () => {
	let delayTime = 0

	navAll.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

function rotate() {
	if (nav.classList.contains('nav-toggle')) {
		arrow.style.transform = 'rotate(180deg)'
	} else {
		arrow.style.transform = 'rotate(0)'
	}
}

const deleteAnimation = () => {
	navAll.forEach(item => {
		item.classList.remove('nav-item-animation')
	})
}

Array.from(navAll).forEach(link => {
	link.addEventListener('click', deleteAnimation)
})

btn.addEventListener('click', handleNav)
nav.addEventListener('click', rotate)
