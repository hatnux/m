$(document).ready(function () {
  var envelope = $("#envelope");
  var countdownContainer = $("#countdown-container"); // Conteneur du texte du compteur
  var countdown = $("#countdown"); // Élément du compteur


  function updateCountdown() {
    var targetDate = new Date("2025-02-12T08:03:00").getTime();
    var now = new Date().getTime();
    var timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      openEnvelope(); // Ouvrir l'enveloppe automatiquement
      countdown.html("titirit");
      countdownContainer.find("h2").hide(); // Masque "Ouverture dans" lorsque le décompte est terminé
      return;
    }

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdown.html(`${days}j ${hours}h ${minutes}m ${seconds}s`);
  }

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  setInterval(updateCountdown, 1000); // Met à jour le compteur toutes les secondes
  updateCountdown(); // Exécute immédiatement la fonction pour afficher un premier état
});
class RandomCoordinates {
    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}


class ShootingStar {
    constructor() {
        this.star = document.createElement('div');
        this.star.classList.add('star');

        this.start = new RandomCoordinates();

        this.setStyles();
    }

    setStyles() {
        this.setNewStyleVar('--start-x', this.start.x);
        this.setNewStyleVar('--start-y', this.start.y);

        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's'); 

        this.setNewStyleVar('--delay', Math.random() + 's');

        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--left', Math.random() * 100 - 30+ '%');

        this.setNewStyleVar('--size', Math.random() + 0.5);

        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg');
    }

    setNewStyleVar(styleName, styleValue) {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star;
    }
}

new ShootingStar();

class NightSky {
    constructor() {
        this.nightSky = document.getElementById('night-sky');

        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars'));
        this.addStars(this.numberOfStars);
    }

    addStars(numberOfStars) {
        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(new ShootingStar().getStar());
        }
    }
}

new NightSky();
