/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const speed = 100;

function animateNumber(id, count, target) {
  const decimals = id === 'foodprint-result--number--index' ? 0 : 2;
  const counter = document.getElementById(id);
  let factor;
  factor = count < target ? 1 : -1;
  const increment = factor * Math.abs(target - count) / speed;

  if (counter.parentNode.parentNode.classList.contains('hidden')) {
    counter.parentNode.parentNode.classList.remove('hidden');
  }
  if (counter.classList.contains('hidden')) {
    counter.classList.remove('hidden');
  }

  const updateCount = () => {
    if ((factor > 0 && count < target) || (factor < 0 && count > target)) {
      count += increment;
      counter.innerHTML = (count).toFixed(decimals);
      setTimeout(updateCount, 1);
    } else {
      counter.innerHTML = target.toFixed(decimals);
      return;
    }
  };

  updateCount();
}
