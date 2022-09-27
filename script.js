let language = window.navigator.language;
language = language.substring(0, 2).toLowerCase();

if (language === 'en') {
    language = 'en';
} else if (language === 'es') {
    language = 'es'
} else if (language === 'fr') {
    language = 'fr'
} else if (language === 'ja') {
    language = 'ja'
} else if (language === 'nl') {
    language = 'nl'
} else if (language === 'zh') {
    language = 'zh'
} else if (language === 'ru') {
    language = 'ru'
} else language = 'en'

let search = window.location.search.substring(58);
let paramLang = search + `?lang=${language}`;
history.pushState(null, null, paramLang)

const root = document.querySelector('.root');
(async (lang)=> {
    let answer = await fetch(`localizations/${lang}.json`);
    let data = await answer.json();
    root.insertAdjacentHTML('afterBegin', ` 
        <div class="wrapper">
    <header class="header">
        <a href="#"><img class="header_img" src="./images/close.png" alt="close"></a>
        <a class="header_link" href="#">${data['Restore']}</a>
    </header>
    <main>
        <h1 class="bp_title">${data['Unlimited Access<br>to All Features']}</h1>
        <div class="bp_content">
            <div class="bp_info">
                <div class="bp_info_item">
                    <img class="bp_info_unlimited" src="./images/unlimitedDocs.svg" alt="images">
                    <span class="bp_info_text">${data['Unlimited documents']}</span>
                </div>
                <div class="bp_info_item">
                    <img class="bp_info_export" src="./images/export.svg" alt="images">
                    <span class="bp_info_text">${data['Count mode']}</span>
                </div>
                <div class="bp_info_item">
                    <img class="bp_info_ocr" src="./images/noAds.svg" alt="images">
                    <span class="bp_info_text">${data['Text recognition (OCR)']}</span>
                </div>
            </div>
        </div>
        <div class="bp_price">
            <div class="bp_price_block" id="apple">
                <h3 class="bp_price_month">${data['Monthly']}</h3>
                <h4 class="bp_price_number price-month">${data['<strong>{{price}}</strong><br>per month']}</h4>
                <div class="bp_price_highlight">
                    <p class="bp_price_highlight_text">${data['3 DAYS FREE']}</p>
                </div>
                <p class="bp_price_total price_left_bottom">${data['{{price}}/month']}</p>
            </div>
            <div class="bp_price_block bp_no_active bp_price_block_circle" id="google">
                <div class="bp_price_sale">
                    <p class="bp_price_sale_number">${data['-83%']}</p>
                </div>
                <h3 class="bp_price_month">${data['Annually']}</h3>
                <h4 class="bp_price_number price-year">${data['<strong>{{price}}</strong><br>per year']}</h4>
                <div class="bp_price_highlight">
                    <p class="bp_price_highlight_text">${data['MOST POPULAR']}</p>
                </div>
                <p class="bp_price_total price_right_bottom">${data['{{price}}/month']}</p>
            </div>
        </div>
        <button class="bp_btn">${data['Continue']}</button>
        <p class="bp_desc">${data['Auto-renewable. Cancel anytime.']}</p>
    </main>
    <footer class="footer">
        <div class="footer_info">
            <a href="#" class="footer_text">${data['Terms of Use']}</a>
            <a href="#" class="footer_text">${data['Privacy Policy']}</a>
        </div>
        <div class="footer_line"></div>
    </footer>
</div>
    `)
    const price = document.querySelectorAll('.bp_price_block');
    const google = document.querySelector('#google');
    const btn = document.querySelector('.bp_btn');

    price.forEach((e) => {
        e.addEventListener('click', () => {
            price.forEach((el) => {
                el.classList.add('bp_no_active');
            })
            e.classList.remove('bp_no_active');
        })
    })

    btn.addEventListener('click', () => {
        if (google.classList.contains('bp_no_active')) {
            location.href = "https://www.apple.com/";
        } else location.href = "https://www.google.com/";


    })
    let priceMonth = document.querySelector('.price-month');
    let priceYear = document.querySelector('.price-year');
    let priceLeftBottom = document.querySelector('.price_left_bottom');
    let priceRightBottom = document.querySelector('.price_right_bottom');
    priceMonth.innerHTML = `$9.99<br/><p class="bp_price_per">${priceMonth.innerHTML.substring(30)}</p>`;
    priceYear.innerHTML = `$19.99<br/><p class="bp_price_per">${priceYear.innerHTML.substring(30)}</p>`;
    priceLeftBottom.innerHTML = `$9.99 ${priceLeftBottom.innerHTML.substring(10)}`;
    priceRightBottom.innerHTML = `$1.66 ${priceLeftBottom.innerHTML.substring(5)}`;;
})(language);








