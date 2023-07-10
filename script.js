const nextBtn = document.getElementById('next-product-page-btn');
const prevBtn = document.getElementById('prev-product-page-btn');
const productsElpage1 = document.getElementById('catalog-products-page-1');
const cataligProduct2 = document.getElementById('catalog-product-2');
const dimentions2 = document.getElementById('dimentions-2');
const productAnnotation2 = document.getElementById('product-annotation-2');
const productPriceCartBtn2 = document.getElementById('product-price-cart-btn2');
const cataligProduct1 = document.getElementById('catalog-product-1');
const dimentions1 = document.getElementById('dimentions-1');
const productAnnotation1 = document.getElementById('product-annotation-1');
const productPriceCartBtn1 = document.getElementById('product-price-cart-btn1');
const cataligProduct3 = document.getElementById('catalog-product-3');
const dimentions3 = document.getElementById('dimentions-3');
const productAnnotation3 = document.getElementById('product-annotation-3');
const productPriceCartBtn3 = document.getElementById('product-price-cart-btn3');
const cataligProduct4 = document.getElementById('catalog-product-4');
const dimentions4 = document.getElementById('dimentions-4');
const productAnnotation4 = document.getElementById('product-annotation-4');
const productPriceCartBtn4 = document.getElementById('product-price-cart-btn4');
const cataligProduct5 = document.getElementById('catalog-product-5');
const dimentions5 = document.getElementById('dimentions-5');
const productAnnotation5 = document.getElementById('product-annotation-5');
const productPriceCartBtn5 = document.getElementById('product-price-cart-btn5');
const cataligProduct6 = document.getElementById('catalog-product-6');
const dimentions6 = document.getElementById('dimentions-6');
const productAnnotation6 = document.getElementById('product-annotation-6');
const productPriceCartBtn6 = document.getElementById('product-price-cart-btn6');
const cataligProduct7 = document.getElementById('catalog-product-7');
const dimentions7 = document.getElementById('dimentions-7');
const productAnnotation7 = document.getElementById('product-annotation-7');
const productPriceCartBtn7 = document.getElementById('product-price-cart-btn7');
const cataligProduct8 = document.getElementById('catalog-product-8');
const dimentions8 = document.getElementById('dimentions-8');
const productAnnotation8 = document.getElementById('product-annotation-8');
const productPriceCartBtn8 = document.getElementById('product-price-cart-btn8');
const topLoginBtn = document.getElementById('top-login-btn');
const topLoginIcon = document.getElementById('top-login-icon');
const topLoginName = document.getElementById('top-login-name');
const topCartBtn = document.getElementById('top-cart-btn');
const topCartIcon = document.getElementById('top-cart-icon');
const topCartName = document.getElementById('top-cart-name');
const topFavorBtn = document.getElementById('top-favor-btn');
const topFavorIcon = document.getElementById('top-favor-icon');
const topFavorName = document.getElementById('top-favor-name');
const toTopBtn = document.getElementById('to-top-btn');

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
nextBtn.addEventListener('click', () => {
    prevBtn.classList.remove('disabled');
    nextBtn.classList.add('disabled');
    productsElpage1.classList.add('catalog-products-translated');
});
prevBtn.addEventListener('click', () => {
    nextBtn.classList.remove('disabled');
    prevBtn.classList.add('disabled');
    productsElpage1.classList.remove('catalog-products-translated');
});
nextBtn.addEventListener('mouseover', () => {
    nextBtn.classList.add('mouseover');

})
nextBtn.addEventListener('mouseleave', () => {
    nextBtn.classList.remove('mouseover');

})
prevBtn.addEventListener('mouseover', () => {
    prevBtn.classList.add('mouseover');

})
prevBtn.addEventListener('mouseleave', () => {
    prevBtn.classList.remove('mouseover');

})
topFavorBtn.addEventListener('mouseover', () => {
    topFavorIcon.classList.add('mouseover')
    topFavorName.classList.add('mouseover')
})
topFavorBtn.addEventListener('mouseleave', () => {
    topFavorIcon.classList.remove('mouseover')
    topFavorName.classList.remove('mouseover')
})
topLoginBtn.addEventListener('mouseover', () => {
    topLoginIcon.classList.add('mouseover')
    topLoginName.classList.add('mouseover')
})
topLoginBtn.addEventListener('mouseleave', () => {
    topLoginIcon.classList.remove('mouseover')
    topLoginName.classList.remove('mouseover')
})
topCartBtn.addEventListener('mouseover', () => {
    topCartIcon.classList.add('mouseover')
    topCartName.classList.add('mouseover')
})
topCartBtn.addEventListener('mouseleave', () => {
    topCartIcon.classList.remove('mouseover')
    topCartName.classList.remove('mouseover')
})
if (document.documentElement.clientWidth > 1000) {
    cataligProduct2.addEventListener('mouseover', () => {
        dimentions2.classList.remove('inactive')
        productPriceCartBtn2.classList.remove('inactive')
        productAnnotation2.classList.add('detail')
        cataligProduct2.classList.add('mouseover')
    })
    cataligProduct2.addEventListener('mouseleave', () => {
        dimentions2.classList.add('inactive')
        productPriceCartBtn2.classList.add('inactive')
        productAnnotation2.classList.remove('detail')
        cataligProduct2.classList.remove('mouseover')
    })
    cataligProduct1.addEventListener('mouseover', () => {
        dimentions1.classList.remove('inactive')
        productPriceCartBtn1.classList.remove('inactive')
        productAnnotation1.classList.add('detail')
        cataligProduct1.classList.add('mouseover')
    })
    cataligProduct1.addEventListener('mouseleave', () => {
        dimentions1.classList.add('inactive')
        productPriceCartBtn1.classList.add('inactive')
        productAnnotation1.classList.remove('detail')
        cataligProduct1.classList.remove('mouseover')
    })
    cataligProduct3.addEventListener('mouseover', () => {
        dimentions3.classList.remove('inactive')
        productPriceCartBtn3.classList.remove('inactive')
        productAnnotation3.classList.add('detail')
        cataligProduct3.classList.add('mouseover')
    })
    cataligProduct3.addEventListener('mouseleave', () => {
        dimentions3.classList.add('inactive')
        productPriceCartBtn3.classList.add('inactive')
        productAnnotation3.classList.remove('detail')
        cataligProduct3.classList.remove('mouseover')
    })
    cataligProduct4.addEventListener('mouseover', () => {
        dimentions4.classList.remove('inactive')
        productPriceCartBtn4.classList.remove('inactive')
        productAnnotation4.classList.add('detail')
        cataligProduct4.classList.add('mouseover')
    })
    cataligProduct4.addEventListener('mouseleave', () => {
        dimentions4.classList.add('inactive')
        productPriceCartBtn4.classList.add('inactive')
        productAnnotation4.classList.remove('detail')
        cataligProduct4.classList.remove('mouseover')
    })
    cataligProduct5.addEventListener('mouseover', () => {
        dimentions5.classList.remove('inactive')
        productPriceCartBtn5.classList.remove('inactive')
        productAnnotation5.classList.add('detail')
        cataligProduct5.classList.add('mouseover')
    })
    cataligProduct5.addEventListener('mouseleave', () => {
        dimentions5.classList.add('inactive')
        productPriceCartBtn5.classList.add('inactive')
        productAnnotation5.classList.remove('detail')
        cataligProduct5.classList.remove('mouseover')
    })
    cataligProduct6.addEventListener('mouseover', () => {
        dimentions6.classList.remove('inactive')
        productPriceCartBtn6.classList.remove('inactive')
        productAnnotation6.classList.add('detail')
        cataligProduct6.classList.add('mouseover')
    })
    cataligProduct6.addEventListener('mouseleave', () => {
        dimentions6.classList.add('inactive')
        productPriceCartBtn6.classList.add('inactive')
        productAnnotation6.classList.remove('detail')
        cataligProduct6.classList.remove('mouseover')
    })
    cataligProduct7.addEventListener('mouseover', () => {
        dimentions7.classList.remove('inactive')
        productPriceCartBtn7.classList.remove('inactive')
        productAnnotation7.classList.add('detail')
        cataligProduct7.classList.add('mouseover')
    })
    cataligProduct7.addEventListener('mouseleave', () => {
        dimentions7.classList.add('inactive')
        productPriceCartBtn7.classList.add('inactive')
        productAnnotation7.classList.remove('detail')
        cataligProduct7.classList.remove('mouseover')
    })
    cataligProduct8.addEventListener('mouseover', () => {
        dimentions8.classList.remove('inactive')
        productPriceCartBtn8.classList.remove('inactive')
        productAnnotation8.classList.add('detail')
        cataligProduct8.classList.add('mouseover')
    })
    cataligProduct8.addEventListener('mouseleave', () => {
        dimentions8.classList.add('inactive')
        productPriceCartBtn8.classList.add('inactive')
        productAnnotation8.classList.remove('detail')
        cataligProduct8.classList.remove('mouseover')
    })
} else {
    cataligProduct1.addEventListener('mouseover', () => {
        productPriceCartBtn1.classList.add('mouseover')
    })
    cataligProduct1.addEventListener('mouseleave', () => {
        productPriceCartBtn1.classList.remove('mouseover')
    })
    cataligProduct2.addEventListener('mouseover', () => {
        productPriceCartBtn2.classList.add('mouseover')
    })
    cataligProduct2.addEventListener('mouseleave', () => {
        productPriceCartBtn2.classList.remove('mouseover')
    })
    cataligProduct3.addEventListener('mouseover', () => {
        productPriceCartBtn3.classList.add('mouseover')
    })
    cataligProduct3.addEventListener('mouseleave', () => {
        productPriceCartBtn3.classList.remove('mouseover')
    })
    cataligProduct4.addEventListener('mouseover', () => {
        productPriceCartBtn4.classList.add('mouseover')
    })
    cataligProduct4.addEventListener('mouseleave', () => {
        productPriceCartBtn4.classList.remove('mouseover')
    })
    cataligProduct5.addEventListener('mouseover', () => {
        productPriceCartBtn5.classList.add('mouseover')
    })
    cataligProduct5.addEventListener('mouseleave', () => {
        productPriceCartBtn5.classList.remove('mouseover')
    })
    cataligProduct6.addEventListener('mouseover', () => {
        productPriceCartBtn6.classList.add('mouseover')
    })
    cataligProduct6.addEventListener('mouseleave', () => {
        productPriceCartBtn6.classList.remove('mouseover')
    })
    cataligProduct7.addEventListener('mouseover', () => {
        productPriceCartBtn7.classList.add('mouseover')
    })
    cataligProduct7.addEventListener('mouseleave', () => {
        productPriceCartBtn7.classList.remove('mouseover')
    })
    cataligProduct8.addEventListener('mouseover', () => {
        productPriceCartBtn8.classList.add('mouseover')
    })
    cataligProduct8.addEventListener('mouseleave', () => {
        productPriceCartBtn8.classList.remove('mouseover')
    })
}

if (document.documentElement.clientWidth <= 1000) {
    dimentions1.classList.remove('inactive')
    productPriceCartBtn1.classList.remove('inactive')
    productAnnotation1.classList.add('detail')
    // cataligProduct1.classList.add('mouseover')
    dimentions2.classList.remove('inactive')
    productPriceCartBtn2.classList.remove('inactive')
    productAnnotation2.classList.add('detail')
    // cataligProduct2.classList.add('mouseover')
    dimentions3.classList.remove('inactive')
    productPriceCartBtn3.classList.remove('inactive')
    productAnnotation3.classList.add('detail')
    // cataligProduct3.classList.add('mouseover')
    dimentions4.classList.remove('inactive')
    productPriceCartBtn4.classList.remove('inactive')
    productAnnotation4.classList.add('detail')
    // cataligProduct4.classList.add('mouseover')
    dimentions5.classList.remove('inactive')
    productPriceCartBtn5.classList.remove('inactive')
    productAnnotation5.classList.add('detail')
    // cataligProduct5.classList.add('mouseover')
    dimentions6.classList.remove('inactive')
    productPriceCartBtn6.classList.remove('inactive')
    productAnnotation6.classList.add('detail')
    // cataligProduct6.classList.add('mouseover')
    dimentions7.classList.remove('inactive')
    productPriceCartBtn7.classList.remove('inactive')
    productAnnotation7.classList.add('detail')
    // cataligProduct7.classList.add('mouseover')
    dimentions8.classList.remove('inactive')
    productPriceCartBtn8.classList.remove('inactive')
    productAnnotation8.classList.add('detail')
    // cataligProduct8.classList.add('mouseover')
} else {
    dimentions1.classList.add('inactive')
    productPriceCartBtn1.classList.add('inactive')
    productAnnotation1.classList.remove('detail')
    cataligProduct1.classList.remove('mouseover')
    dimentions2.classList.add('inactive')
    productPriceCartBtn2.classList.add('inactive')
    productAnnotation2.classList.remove('detail')
    cataligProduct2.classList.remove('mouseover')
    dimentions3.classList.add('inactive')
    productPriceCartBtn3.classList.add('inactive')
    productAnnotation3.classList.remove('detail')
    cataligProduct3.classList.remove('mouseover')
    dimentions4.classList.add('inactive')
    productPriceCartBtn4.classList.add('inactive')
    productAnnotation4.classList.remove('detail')
    cataligProduct4.classList.remove('mouseover')
    dimentions5.classList.add('inactive')
    productPriceCartBtn5.classList.add('inactive')
    productAnnotation5.classList.remove('detail')
    cataligProduct5.classList.remove('mouseover')
    dimentions6.classList.add('inactive')
    productPriceCartBtn6.classList.add('inactive')
    productAnnotation6.classList.remove('detail')
    cataligProduct6.classList.remove('mouseover')
    dimentions7.classList.add('inactive')
    productPriceCartBtn7.classList.add('inactive')
    productAnnotation7.classList.remove('detail')
    cataligProduct7.classList.remove('mouseover')
    dimentions8.classList.add('inactive')
    productPriceCartBtn8.classList.add('inactive')
    productAnnotation8.classList.remove('detail')
    cataligProduct8.classList.remove('mouseover')
}
