(() => {
  const records = [...document.querySelectorAll('.reference-record')];
  const groups = [...document.querySelectorAll('.reference-group')];
  const search = document.querySelector('#reference-search');
  const topic = document.querySelector('#topic-filter');
  const directness = document.querySelector('#directness-filter');
  const access = document.querySelector('#access-filter');
  const reset = document.querySelector('#reset-filters');
  const count = document.querySelector('#visible-count');
  const message = document.querySelector('#result-message');
  const empty = document.querySelector('#no-results');

  if (!records.length || !search || !topic || !directness || !access) return;

  const normalize = (value) => value.toLocaleLowerCase('zh-Hant').normalize('NFKC');

  const update = () => {
    const query = normalize(search.value.trim());
    let visible = 0;

    records.forEach((record) => {
      const matchesQuery = !query || normalize(record.textContent).includes(query);
      const matchesTopic = topic.value === 'all' || record.dataset.topic === topic.value;
      const matchesDirectness = directness.value === 'all' || record.dataset.directness === directness.value;
      const matchesAccess = access.value === 'all' || record.dataset.access === access.value;
      const show = matchesQuery && matchesTopic && matchesDirectness && matchesAccess;
      record.hidden = !show;
      if (show) visible += 1;
    });

    groups.forEach((group) => {
      group.hidden = !group.querySelector('.reference-record:not([hidden])');
    });

    count.textContent = String(visible);
    message.textContent = visible === records.length
      ? `顯示全部 ${records.length} 筆文獻。`
      : `共找到 ${visible}／${records.length} 筆文獻。`;
    empty.hidden = visible !== 0;
  };

  [search, topic, directness, access].forEach((control) => {
    control.addEventListener(control === search ? 'input' : 'change', update);
  });

  reset.addEventListener('click', () => {
    search.value = '';
    topic.value = 'all';
    directness.value = 'all';
    access.value = 'all';
    update();
    search.focus();
  });

  update();
})();
