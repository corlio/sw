/*jshint -W097 */
/*globals $:false */
"use strict";

var Races = {};
var Powers = {};
var RowId = 0;

function by_title (a, b) {
    return((a.title > b.title) ? 1 : -1);
}

function stress (text) {
    return("<span class=\"stress\">" + text + "</span>");
}

function format_entry (entry) {
    var html = "";
    if (typeof entry === "string") {
        html += "<u>Nota Bene:</u><br>";
        html += "&bull; toute conqu&ecirc;te n&eacute;cessite au moins 1 pion<br>";
        html += "&bull; tous les bonus sont \"dans la limite des stocks disponibles\"<br>";
        html += "&bull; " + stress("invuln&eacute;rable") + " = \"imprenable et immunis&eacute; " +
            "contre les capacit&eacute;s sp&eacute;cifiques et pouvoirs sp&eacute;ciaux des autres peuples\"<br>";
    } else {
        html += "<b>" + entry.title + " (" + entry.count + ")</b>: ";
        html += entry.descro.replace(/\{([^{}]+)\}/g, function (undefined, text) {
            return(stress(text));
        });
    }
    return(html);
}

function format_table (data, columns) {
    var count = 0;
    var row = $("<tr>");
    $.each(data, function (undefined, entry) {
        row.append($("<td>").html(format_entry(entry)));
        count++;
        if (count === columns) {
            $("#table").append(row);
            row = $("<tr>");
            count = 0;
        }
    });
    if (count > 0) $("#table").append(row);
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

function load_json (what, callback) {
    var list = [];
    $.when(
        $.get("sw-" + what + ".json", function (data) {
            list = list.concat(data);
        }),
        $.get("bna-" + what + ".json", function (data) {
            list = list.concat(data);
        })
    ).then(function () {
        list.sort(by_title);
        callback(list);
    });
}

function init_powers () {
    load_json("powers", function (data) {
        format_table(data, 5);
    });
}

function init_races () {
    load_json("races", function (data) {
        data.splice(0, 0, "help");
        format_table(data, 4);
    });
}

function init_index () {
    $("#add").click(do_add);
    load_json("races", function (data) {
        $.each(data, function (undefined, entry) {
            Races[entry.id] = entry;
            $("#race").append($("<option></option>").attr("value", entry.id).html(entry.title));
        });
    });
    load_json("powers", function (data) {
        $.each(data, function (undefined, entry) {
            Powers[entry.id] = entry;
            $("#power").append($("<option></option>").attr("value", entry.id).html(entry.title));
        });
    });
}
