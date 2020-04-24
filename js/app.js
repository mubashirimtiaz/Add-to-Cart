//show cart
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        // toggle will looking for the class show-cart if it is present then remove it anf if it is not present then add it
        cart.classList.toggle('show-cart')
    })
})();


//add item to the cart 
(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            // console.log(e.target)
            if (e.target.parentElement.className == 'store-item-icon') {
                let fullPath = e.target.parentElement.previousElementSibling.src
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);
                // console.log(partPath)

                const item = {}

                item.img = 'img-cart' + partPath;
                item.name = e.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[0].textContent;
                item.price = e.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[1].textContent.slice(1).trim();
                // console.log(item.price)

                const div = document.createElement('div');
                div.classList.add('cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                )
                div.innerHTML = `
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="cart-item-text">

                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>
                `
                const cart = document.querySelector('.cart');
                const beforeThat = document.querySelector('.cart-total-container')


                cart.insertBefore(div, beforeThat);
                alert('Product is added into the cart')
                showTotal();

            }
        })
    })
    function showTotal() {

        const cartTotal = document.querySelector('#cart-total');
        const itemsPrice = [];
        const cartItemPrice = document.querySelectorAll('.cart-item-price');
        const itemTotal = document.querySelector('.item-total');
        const itemCount = document.getElementById('item-count')

        cartItemPrice.forEach(function (item) {
            itemsPrice.push(parseFloat(item.textContent));
        })
        // console.log(itemsPrice);

        let finalTotal = itemsPrice.reduce(function (total, item) {
            total += item
            return total;
        }, 0)
        // console.log(Math.round(finalTotal));
        finalTotal = finalTotal.toFixed(2)
        cartTotal.textContent = finalTotal;
        itemTotal.textContent = finalTotal;
        itemCount.textContent = itemsPrice.length;


    }
})();


(function () {
    const cart = document.querySelector('.cart');
    cart.addEventListener('click', function (e) {
        if (e.target.parentElement.className === "cart-item-remove") {
            const aParent = e.target.parentElement.parentElement;
            // console.log(aParent)
            cart.removeChild(aParent)
            // console.log(cartTotal)
        }
    })
})();