/*jshint -W097,-W098 */
"use strict";

var Races = {};
var Powers = {};
var RowId = 0;

function stress (text) {
    return("<span class=\"stress\">" + text + "</span>");
}

function by_title (a, b) {
    return((a.title > b.title) ? 1 : -1);
}

function format_help () {
    var html = "";
    html += "<u>Nota Bene:</u><br>";
    html += "&bull; toute conqu&ecirc;te n&eacute;cessite au moins 1 pion<br>";
    html += "&bull; tous les bonus sont \"dans la limite des stocks disponibles\"<br>";
    html += "&bull; " + stress("invuln&eacute;rable") + " = \"imprenable et immunis&eacute; contre les capacit&eacute;s sp&eacute;cifiques et pouvoirs sp&eacute;ciaux des autres peuples\"<br>";
    return(html);
}

function format_entry (entry) {
    var html = "";
    html += "<b>" + entry.title + " (" + entry.count + ")</b>: ";
    html += entry.descro.replace(/\{([^{}]+)\}/g, function (undefined, text) { return(stress(text)); });
    return(html);
}

function do_add () {
    var id = "tr" + (++RowId);
    var button = $("<button>").text("remove");
    button.click(function () {
        $("#" + id).remove();
    });
    var race = $("#race").find(":selected").attr("value");
    var power = $("#power").find(":selected").attr("value");
    var row = $("<tr>").attr("id", id);
    row.append($("<td>").html(format_entry(Races[race])));
    row.append($("<td>").html(format_entry(Powers[power])));
    row.append($("<th>").append(button));
    $("#table").append(row);
}

function load_json (what) {
    var list = [];
    $.each([ "sw", "bna" ], function (undefined, name) {
        var url = name + "-" + what + ".json";
        $.ajax({
            url: url,
            dataType: "json",
            async: false,
            success: function (data) { list = list.concat(data); },
            error: function () { alert("error for " + url); },
        });
    });
    list.sort(by_title);
    return(list);
}

function init_powers () {
    var powers = load_json("powers");
    var count = 0;
    var row = $("<tr>");
    $.each(powers, function (undefined, power) {
        row.append($("<td>").html(format_entry(power)));
        count++;
        if (count === 5) {
            $("#table").append(row);
            row = $("<tr>");
            count = 0;
        }
    });
    if (count > 0) $("#table").append(row);
}

function init_races () {
    var races = load_json("races");
    var count = 1;
    var row = $("<tr>");
    row.append($("<td>").html(format_help()));
    $.each(races, function (undefined, race) {
        row.append($("<td>").html(format_entry(race)));
        count++;
        if (count === 4) {
            $("#table").append(row);
            row = $("<tr>");
            count = 0;
        }
    });
    if (count > 0) $("#table").append(row);
}

function init_index () {
    $.each(load_json("races"), function (undefined, entry) {
        Races[entry.id] = entry;
        $("#race").append($("<option></option>").attr("value", entry.id).html(entry.title));
    });
    $.each(load_json("powers"), function (undefined, entry) {
        Powers[entry.id] = entry;
        $("#power").append($("<option></option>").attr("value", entry.id).html(entry.title));
    });
    $("#add").click(do_add);
}
