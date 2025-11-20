// test
// test2

  const maintab = document.getElementById('Maintab')

  const main = document.getElementById('about')

  const contact = document.getElementById('contact')

  const edu = document.getElementById('edu')

  const experience = document.getElementById('experience')

  const portfolio = document.getElementById('portfoliolist')

  function MakeMainActive() {
  // Toggle the main section
  const isNowActive = !main.classList.contains('active');

  // If activating main, deactivate others
  if (isNowActive) {
    main.classList.add('active');
    main.classList.remove('hidden');

    contact.classList.remove('active');
    contact.classList.add('hidden');

    edu.classList.remove('active');
    edu.classList.add('hidden');

    experience.classList.remove('active');
    experience.classList.add('hidden');
  } else {
    // If deactivating main, just toggle its state
    main.classList.toggle('active');
    main.classList.toggle('hidden');
  }
}

function MakeContactActive() {
  // Toggle the contact section
  const isNowActive = !contact.classList.contains('active');

  // If activating contact, deactivate others
  if (isNowActive) {
    contact.classList.add('active');
    contact.classList.remove('hidden');

    main.classList.remove('active');
    main.classList.add('hidden');

    edu.classList.remove('active');
    edu.classList.add('hidden');

    experience.classList.remove('active');
    experience.classList.add('hidden');
  } else {
    // If deactivating contact, just toggle its state
    contact.classList.toggle('active');
    contact.classList.toggle('hidden');
  }
}

function MakeEduActive() {
  // Toggle the education section
  const isNowActive = !edu.classList.contains('active');

  // If activating education, deactivate others
  if (isNowActive) {
    edu.classList.add('active');
    edu.classList.remove('hidden');

    main.classList.remove('active');
    main.classList.add('hidden');

    contact.classList.remove('active');
    contact.classList.add('hidden');

    experience.classList.remove('active');
    experience.classList.add('hidden');
  } else {
    // If deactivating education, just toggle its state
    edu.classList.toggle('active');
    edu.classList.toggle('hidden');
  }
}

function MakeExperienceActive() {
  // Toggle the experience section
  const isNowActive = !experience.classList.contains('active');

  // If activating experience, deactivate others
  if (isNowActive) {
    experience.classList.add('active');
    experience.classList.remove('hidden');

    main.classList.remove('active');
    main.classList.add('hidden');

    contact.classList.remove('active');
    contact.classList.add('hidden');

    edu.classList.remove('active');
    edu.classList.add('hidden');
  } else {
    // If deactivating experience, just toggle its state
    experience.classList.toggle('active');
    experience.classList.toggle('hidden');
  }
}

function makeportfolioactive() {
  const isNowActive = !portfolio.classList.contains('active');

    if (isNowActive) {
    main.classList.remove('hidden');
    main.classList.add('active');

    experience.classList.remove('active');
    experience.classList.add('hidden');

    main.classList.remove('active');
    main.classList.add('hidden');

    contact.classList.remove('active');
    contact.classList.add('hidden');

    edu.classList.remove('active');
    edu.classList.add('hidden');
  } else {
    // If deactivating experience, just toggle its state
    experience.classList.toggle('active');
    experience.classList.toggle('hidden');
  }
}

window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('Main').click();
});
