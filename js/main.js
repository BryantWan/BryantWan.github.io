// test
// test2

  const maintab = document.getElementById('Maintab')

  const main = document.getElementById('about')

  const contact = document.getElementById('contact')

  const edu = document.getElementById('edu')

  const experience = document.getElementById('experience')

  const portfolio = document.getElementById('portlist')

  function MakeMainActive() {
  // Toggle the main section
  const isNowActive = !main.classList.contains('active');

  // If activating main, deactivate others
  if (isNowActive) {
    main.classList.add('active');
    main.classList.remove('hidden');

    contact.classList.add('hidden');
    contact.classList.remove('active');

    edu.classList.add('hidden');
    edu.classList.remove('active');

    experience.classList.add('hidden');
    experience.classList.remove('active');

    portfolio.classList.add('hidden');
    portfolio.classList.remove('active');
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
    main.classList.add('hidden');
    main.classList.remove('active');

    contact.classList.add('active');
    contact.classList.remove('hidden');

    edu.classList.add('hidden');
    edu.classList.remove('active');

    experience.classList.add('hidden');
    experience.classList.remove('active');

    portfolio.classList.add('hidden');
    portfolio.classList.remove('active');
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
    main.classList.add('hidden');
    main.classList.remove('active');

    contact.classList.add('hidden');
    contact.classList.remove('active');

    edu.classList.add('active');
    edu.classList.remove('hidden');

    experience.classList.add('hidden');
    experience.classList.remove('active');

    portfolio.classList.add('hidden');
    portfolio.classList.remove('active');
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
    main.classList.add('hidden');
    main.classList.remove('active');

    contact.classList.add('hidden');
    contact.classList.remove('active');

    edu.classList.add('hidden');
    edu.classList.remove('active');

    experience.classList.add('active');
    experience.classList.remove('hidden');

    portfolio.classList.add('hidden');
    portfolio.classList.remove('active');
  } else {
    // If deactivating experience, just toggle its state
    experience.classList.toggle('active');
    experience.classList.toggle('hidden');
  }
}

function makeportfolioactive() {
  const isNowActive = !portfolio.classList.contains('active');

    if (isNowActive) {
    main.classList.add('hidden');
    main.classList.remove('active');

    contact.classList.add('hidden');
    contact.classList.remove('active');

    edu.classList.add('hidden');
    edu.classList.remove('active');

    experience.classList.add('hidden');
    experience.classList.remove('active');

    portfolio.classList.add('active');
    portfolio.classList.remove('hidden');
  } else {
    // If deactivating experience, just toggle its state
    portfolio.classList.toggle('active');
    portfolio.classList.toggle('hidden');
  }
}

window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('Main').click();
});


/*
  main.classList.add('');
  main.classList.remove('');

  contact.classList.add('');
  contact.classList.remove('');

  edu.classList.add('');
  edu.classList.remove('');

  experience.classList.add('');
  experience.classList.remove('');

  portfolio.classList.add('');
  portfolio.classList.remove('');
*/