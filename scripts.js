const affirmations = [
      "My baby is safe and loved.",
      "My baby knows all is well.",
      "I trust my body to know what to do.",
      "My body is amazing just the way it is.",
      "I accept myself the way I am.",
      "I am capable of amazing things.",
      "I am on a journey, growing and developing.",
      "I am resilient, strong, and brave.",
      "I'm fine with who I am, and I love who I'm becoming.",
      "I got this!",
      "Breathe!",
      "I welcome my baby with love.",
      "My baby is healthy and happy.",
      "I know I can do this.",
      "I trust my instincts.",
      "I am grateful.",
      "Our home is filled with love and kindness.",
      "One step at a time.",
      "I will make the most of today.",
      "My life is taking place right here, right now.",
      "How I spend my days is how I spend my life.",
      "It's okay to ask for and accept help.",
      "Everything is going to be okay.",
      "Frustration can be my greatest teacher.",
      "Tomorrow is another day.",
      "This too shall pass.",
      "I'm doing the best I can.",
      "I choose to be calm.",
      "Every experience I have helps me grow.",
      "I am in charge of how I live each day.",
      "Happiness is a choice. I choose to be happy.",
      "Nobody but me decides how I feel.",
      "I am at peace with what has happened, is happening, and will happen.",
      "I have all that I need.",
      "I believe in who I am.",
      "Everything is as it should be.",
      "I am in charge of my thoughts, and I don't judge myself.",
      "I am responsible for looking after me.",
      "By being myself, I bring happiness to other people.",
      "I make positive changes in the world.",
      "I choose to surround myself with love.",
      "When I fall down, I get back up again.",
      "Each day I am growing stronger.",
      "I trust my intuition.",
      "I am brave and courageous.",
      "I am loved.",
      "All is well.",
      "I wake up today with strength in my heart and clarity in my mind.",
      "Today I will let go of the guilt weighing on my shoulders.",
      "Today I will love fiercely, laugh freely, and live courageously."
    ];
    const backgroundImages = [
      'background 1.jpg',
      'background 2.jpg',
      'background 3.jpg'
    ];
    const bibleVerses = [
      "Children are a heritage from the Lord, offspring a reward from him. - Psalm 127:3",
      "Before I formed you in the womb I knew you, before you were born I set you apart. - Jeremiah 1:5",
      "And the child grew and became strong in spirit, filled with wisdom. And the favor of God was upon him. - Luke 2:40",
      "For this child I prayed, and the Lord has granted me my petition that I made to him. - 1 Samuel 1:27",
      "Behold, children are a heritage from the Lord, the fruit of the womb a reward. - Psalm 127:3",
      "Anxiety weighs down the heart, but a kind word cheers it up. - Proverbs 12:25",
      "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid. - John 14:27",
      "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
      "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light. - Matthew 11:28",
      "I sought the Lord, and he answered me; he delivered me from all my fears. - Psalm 34:4"
    ];
    let affirmationCounter = 0;

    function displayRandomAffirmation() {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      const affirmationElement = document.getElementById('affirmation');
      affirmationElement.textContent = affirmations[randomIndex];
    }

    function handleReRollButtonClick() {
      // Reroll without affecting the affirmation counter
      displayRandomAffirmation();
    }

    function handleAffirmationButtonClick() {
      affirmationCounter++;
      if (affirmationCounter >= 5) {
        playRewardAnimation();
        affirmationCounter = 0; // Reset the counter after the reward
      }
    }

function playRewardAnimation() {
    // Start the confetti animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffc0cb', '#008080', '#ffa07a'], // Replace these with the actual colors from your image
        scalar: 1.5 // This increases the size of the confetti
    });

    // Your existing code
    alert("Nice! It may seem silly, but it helps.");
}

    function displayRandomBibleVerse() {
      const randomIndex = Math.floor(Math.random() * bibleVerses.length);
      const bibleVerseElement = document.getElementById('bibleVerse');
      bibleVerseElement.textContent = bibleVerses[randomIndex];
    }
    // Display random affirmation and Bible verse on page load
    displayRandomAffirmation();
    displayRandomBibleVerse();
    // Change the background image
    const bodyElement = document.body;
    const randomImageIndex = Math.floor(Math.random() * backgroundImages.length);
    bodyElement.style.backgroundImage = `url('images/${backgroundImages[randomImageIndex]}')`;
  
