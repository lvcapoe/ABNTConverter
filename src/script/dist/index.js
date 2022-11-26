var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var options = document.querySelector('#options');
var content = document.querySelector('#content');
var inputs = document.querySelectorAll('.inputContainer');
var Dater = /** @class */ (function () {
    function Dater() {
    }
    Dater.FormatDate = function (date) {
        return "".concat(date.substring(8, 10), "/").concat(date.substring(5, 7), "/").concat(date.substring(0, 4));
    };
    Dater.GetDay = function (date) {
        return "".concat(date.substring(8, 10));
    };
    Dater.GetMonth = function (date) {
        return "".concat(date.substring(5, 7));
    };
    Dater.GetYear = function (date) {
        return "".concat(date.substring(0, 4));
    };
    return Dater;
}());
var Reference = /** @class */ (function () {
    function Reference() {
    }
    return Reference;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Book.GetInfo = function () {
        Book.Name = document.querySelector('#name').value,
            Book.LastName = document.querySelector('#lastName').value,
            Book.Title = document.querySelector('#title').value,
            Book.SubTitle = document.querySelector('#subtitle').value,
            Book.Edition = document.querySelector('#edition').value,
            Book.Local = document.querySelector('#local').value,
            Book.Publisher = document.querySelector('#publisher').value,
            Book.AccessDate = Dater.FormatDate(document.querySelector('#access').value);
    };
    Book.GetLink = function () {
        return "".concat(Book.LastName.toUpperCase(), ", ").concat(Book.Name, ". ").concat(Book.Title, ": ").concat(Book.SubTitle, ". ").concat(Book.Edition, ". ").concat(Book.Local, ": ").concat(Book.Publisher, ", ").concat(Book.AccessDate, ".");
    };
    Book.WriteHTML = function () {
        inputs[0].innerHTML = "\n\t\t\t\t<div class=\"box\">\n                        <input id=\"name\" type=\"text\" placeholder=\"Nome\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"lastName\" type=\"text\" placeholder=\"Sobrenome\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"title\" type=\"text\" placeholder=\"T\u00EDtulo do livro\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"subtitle\" type=\"text\" placeholder=\"Subt\u00EDtulo\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"edition\" type=\"text\" placeholder=\"Edi\u00E7\u00E3o\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"local\" type=\"text\" placeholder=\"Local de publica\u00E7\u00E3o\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"publisher\" type=\"text\" placeholder=\"Editora\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"access\" type=\"date\" placeholder=\"Data de publica\u00E7\u00E3o\">\n                </div>\n\t\t\t";
    };
    return Book;
}(Reference));
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.GetInfo = function () {
        Homepage.Name = document.querySelector('#name').value,
            Homepage.Site = document.querySelector('#siteName').value,
            Homepage.Year = document.querySelector('#year').value,
            Homepage.Resume = document.querySelector('#resume').value,
            Homepage.Link = document.querySelector('#url').value,
            Homepage.AccessDate = Dater.FormatDate(document.querySelector('#access').value);
    };
    Homepage.GetLink = function () {
        return ("\n\t\t\t\t".concat(Homepage.Name, ". ").concat(Homepage.Site, ", ").concat(Homepage.Year, ". ").concat(Homepage.Resume, ". Dispon\u00EDvel em: &lt;").concat(Homepage.Link, "&gt;. Acesso em: ").concat(Homepage.AccessDate, ".\n\t\t\t"));
    };
    Homepage.WriteHTML = function () {
        inputs[0].innerHTML = "\n\t\t\t\t<div class=\"box\">\n                        <input id=\"url\" type=\"text\" placeholder=\"Link URL\">\n                    </div>    \n                    <div class=\"box\">\n                        <input id=\"name\" type=\"text\" placeholder=\"Autor ou Organiza\u00E7\u00E3o\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"resume\" type=\"text\" placeholder=\"Emenda\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"siteName\" type=\"text\" placeholder=\"Nome do site\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"year\" type=\"number\" placeholder=\"Ano\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"access\" type=\"date\" placeholder=\"Data de acesso\">\n                </div>\n\t\t\t";
    };
    return Homepage;
}(Reference));
var Matter = /** @class */ (function (_super) {
    __extends(Matter, _super);
    function Matter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Matter.GetInfo = function () {
        Matter.Name = document.querySelector('#name').value,
            Matter.LastName = document.querySelector('#lastName').value,
            Matter.Link = document.querySelector('#url').value,
            Matter.Title = document.querySelector('#title').value,
            Matter.Site = document.querySelector('#siteName').value,
            Matter.Year = document.querySelector('#year').value,
            Matter.AccessDate = Dater.FormatDate(document.querySelector('#access').value);
    };
    Matter.GetLink = function () {
        return ("\n\t\t\t".concat(Matter.LastName.toUpperCase(), ", ").concat(Matter.Name, ". ").concat(Matter.Title, ". ").concat(Matter.Site, ", ").concat(Matter.Year, ". Dispon\u00EDvel em: &lt;").concat(Matter.Link, "&gt;. Acesso em: ").concat(Matter.AccessDate, ".\n\t\t\t"));
    };
    Matter.WriteHTML = function () {
        inputs[0].innerHTML = "\n\t\t\t<div class=\"box\">\n                        <input id=\"url\" type=\"text\" placeholder=\"Link URL\">\n                    </div>    \n                    <div class=\"box\">\n                        <input id=\"name\" type=\"text\" placeholder=\"Nome\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"lastName\" type=\"text\" placeholder=\"Sobrenome\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"title\" type=\"text\" placeholder=\"T\u00EDtulo da Mat\u00E9ria\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"siteName\" type=\"text\" placeholder=\"Nome do site\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"year\" type=\"number\" placeholder=\"Ano\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"access\" type=\"date\" placeholder=\"Data de acesso\">\n                    </div>\n\t\t";
    };
    return Matter;
}(Reference));
var YoutubeVideo = /** @class */ (function (_super) {
    __extends(YoutubeVideo, _super);
    function YoutubeVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideo.GetInfo = function () {
        YoutubeVideo.Name = document.querySelector('#name').value,
            YoutubeVideo.LastName = document.querySelector('#lastName').value,
            YoutubeVideo.Title = document.querySelector('#title').value,
            YoutubeVideo.Date = Dater.FormatDate(document.querySelector('#date').value),
            YoutubeVideo.Link = document.querySelector('#url').value,
            YoutubeVideo.AccessDate = Dater.FormatDate(document.querySelector('#access').value);
    };
    YoutubeVideo.GetLink = function () {
        return ("\n\t\t\t\t\t".concat(YoutubeVideo.LastName.toUpperCase(), ", ").concat(YoutubeVideo.Name, ". ").concat(YoutubeVideo.Title, ". ").concat(YoutubeVideo.Site, ", ").concat(YoutubeVideo.Date, ". Dispon\u00EDvel em: &lt;").concat(YoutubeVideo.Link, "&gt;. Acesso em: ").concat(YoutubeVideo.AccessDate, ".\n\t\t\t"));
    };
    YoutubeVideo.WriteHTML = function () {
        inputs[0].innerHTML = "\n\t\t\t\t<div class=\"box\">\n                        <input id=\"url\" type=\"text\" placeholder=\"Link URL\">\n                    </div>    \n                    <div class=\"box\">\n                        <input id=\"name\" type=\"text\" placeholder=\"Nome do autor\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"lastName\" type=\"text\" placeholder=\"Sobrenome do autor\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"title\" type=\"text\" placeholder=\"T\u00EDtulo do v\u00EDdeo\">\n                    </div>\n                    <div class=\"box\">\n                        <input id=\"siteName\" type=\"text\" placeholder=\"Nome do site\" readonly value=\"Youtube\">\n                    </div>\n                    <div class=\"box\">\n                        <label>Data do v\u00EDdeo:</label>\n                        <input id=\"date\" type=\"date\" placeholder=\"Ano\">\n                    </div>\n                    <div class=\"box\">\n                        <label>Data de acesso:</label>\n                        <input id=\"access\" type=\"date\" placeholder=\"Data de acesso\">\n                    </div>\n\n\t\t\t";
    };
    YoutubeVideo.Site = "Youtube";
    return YoutubeVideo;
}(Reference));
options.addEventListener('change', function () {
    switch (options.value) {
        case 'Book':
            Book.WriteHTML();
            break;
        case 'Homepage':
            Homepage.WriteHTML();
            break;
        case 'Matter':
            Matter.WriteHTML();
            break;
        case 'YoutubeVideo':
            YoutubeVideo.WriteHTML();
            break;
    }
});
document.querySelector('#abnButton').addEventListener('click', function () {
    switch (options.value) {
        case 'Book':
            Book.GetInfo();
            content.innerHTML = Book.GetLink();
            break;
        case 'Homepage':
            Homepage.GetInfo();
            content.innerHTML = Homepage.GetLink();
            break;
        case 'YoutubeVideo':
            YoutubeVideo.GetInfo();
            content.innerHTML = YoutubeVideo.GetLink();
            break;
        case 'Matter':
            Matter.GetInfo();
            content.innerHTML = Matter.GetLink();
            break;
    }
});
