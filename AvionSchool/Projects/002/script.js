const item = document.querySelectorAll('.item');
const drop = document.querySelectorAll('.drop');

let draggedItem = null;

for (let i = 0; i < item.length; i++) {
    const items = item[i];

    items.addEventListener('dragstart', function() {
        console.log('dragstart');
        draggedItem = items;
        setTimeout(function () {
            items.style.display = 'none';
        }, 0);
        
    });

    items.addEventListener('dragend', function() {
        console.log('dragend');
        setTimeout(function () {
            draggedItem.style.display = 'block'
            draggedItem = null;
        }, 0);
    });

    for (let j = 0; j < drop.length; j++) {
        const drops = drop[j];

        drops.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        drops.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });
        drops.addEventListener('drop', function (e) {
            console.log('drop');
            this.append(draggedItem);
        });
    }
}