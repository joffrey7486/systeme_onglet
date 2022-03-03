
(function() {

	var afficherOnglet = function(a, animations) {
		if(animations === undefined) {
			animations = true
		}
		var div = a.parentNode.parentNode.parentNode
		var li = a.parentNode
		var activeTab = div.querySelector('.tab-content.active') // Contenu actif
		var target = div.querySelector(a.getAttribute('href')) //Contenu à afficher
		if(li.classList.contains('active')){
			return false
		}
		div.querySelector('.tabs .active').classList.remove('active')
		li.classList.add('active')

		if (animations) {
			activeTab.classList.add('fade')
			activeTab.classList.remove('in')
			var transitionend = function () {
				this.classList.remove('fade')
				this.classList.remove('active')
				target.classList.add('active')
				target.classList.add('fade')
				target.offsetWidth
				target.classList.add('in')	
				activeTab.removeEventListener('transitionend', transitionend)
			}
			activeTab.addEventListener('transitionend', transitionend)
		} else {
			target.classList.add('active')
			activeTab.classList.remove('active')
		}
	}

	var tabs = document.querySelectorAll('.tabs a')
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', function (e) {
			afficherOnglet(this)
			
		})
	}

	var hashChange = function (e) {
		var hash = window.location.hash
		var a = document.querySelector('a[href="' + hash + '"]')
		if(a !== null && !a.parentNode.classList) {
			afficherOnglet(a, e !== undefined)
		}
	}

	window.addEventListener('hashchange', hashChange)
	hashChange()
})()

