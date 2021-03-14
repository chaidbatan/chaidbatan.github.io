// Determine chess pieces first
// Move chess pieces
// Create rules

// after i-drag, need ng function kung saan lang pwede mag move per piece
// another function para makakain ng chess piece (remove ng element sa isang location, possible to save in array ang removed pieces)
// another function to determine winner
// EN PASSANTE -  is a move in chess.[1] It is a special pawn capture that can only occur immediately after a pawn makes a move of two squares from its starting square, and it could have been captured by an enemy pawn had it advanced only one square. The opponent captures the just-moved pawn "as it passes" through the first square. The result is the same as if the pawn had advanced only one square and the enemy pawn had captured it normally.
// CASTLING - is a move in the game of chess involving a player's king and either of the player's original rooks. It is the only move in chess in which a player moves two pieces in the same move, and it is the only move aside from the knight's move where a piece can be said to "jump over" another.[1]



const item = document.querySelectorAll('.item');
const drop = document.querySelectorAll('.drop');

let draggedItem = null;

// FOR DRAGGING PIECES
function dragItems() {
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
};
dragItems();


// MOVING PAWN
function movePawn() {
    let pawn = document.querySelector('#wPawn');
}
movePawn();
