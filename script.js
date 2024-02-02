var message = document.getElementById('message');
var rothBtn = document.getElementById('rothBtn');
var rothMessage = document.getElementById('rothMessage');
var qqqm = document.getElementById('qqqm');

qqqm.addEventListener('click', function() {
  message.innerHTML = "If you invest $583.33 each month in Saroj or Sabina Roth IRA, which is $7,000 a year (Max contribution for 2024), your portfolio might grow to over <b>$2,740,050</b>, which is Compound Annual Growth Rate (CAGR) of 31.45 percent. We got this result for investing in Nasdaq 100 for last 30 years, starting January 1993 - December 2023";
})

rothBtn.addEventListener('click', function() {
  rothMessage.innerHTML = "If you invest $583.33 each month in Saroj or Sabina Roth IRA, which is $7,000 a year (Max contribution for 2024), your portfolio might grow to over <b>$2,740,050</b>, which is Compound Annual Growth Rate (CAGR) of 31.45 percent. We got this result for investing in Nasdaq 100 for last 30 years, starting January 1993 - December 2023";
})