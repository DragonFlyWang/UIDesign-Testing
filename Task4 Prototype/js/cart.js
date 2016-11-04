function removeItem(elem) {
    price = parseFloat($(elem).parents("tr").find(".priceProduct").text());

    newSubTotal = parseFloat($("#subTotal").text()) - price;
    newTotal = parseFloat($("#total").text()) - price;

    $("#subTotal").text(newSubTotal.toFixed(2));
    $("#total").text(newTotal.toFixed(2));
    $(elem).parents("tr").remove();
}

function plusQty(elem) {
    qty = parseInt($(elem).prev().val()) + 1;
    $(elem).prev("input").val(qty);

    price = parseFloat($(elem).parents("tr").find(".price").text());

    res = qty * price;
    diff = res - parseFloat($(elem).parents("tr").find(".priceProduct").text());

    $(elem).parents("tr").find(".priceProduct").text(res.toFixed(2));
    newSubTotal = parseFloat($("#subTotal").text()) + diff;
    newTotal = parseFloat($("#total").text()) + diff;

    $("#subTotal").text(newSubTotal.toFixed(2));
    $("#total").text(newTotal.toFixed(2));
}

function minusQty(elem) {
    qty = parseInt($(elem).next().val()) - 1;
    if (qty < 1) {
        qty = 1;
        return;
    }

    $(elem).next().val(qty);

    price = parseFloat($(elem).parents("tr").find(".price").text());

    res = qty * price;
    diff = res - parseFloat($(elem).parents("tr").find(".priceProduct").text());

    $(elem).parents("tr").find(".priceProduct").text(res.toFixed(2));
    newSubTotal = parseFloat($("#subTotal").text()) + diff;
    newTotal = parseFloat($("#total").text()) + diff;

    $("#subTotal").text(newSubTotal.toFixed(2));
    $("#total").text(newTotal.toFixed(2));
}
