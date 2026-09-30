(function () {
    var KEY = "todo-theme";
    var root = document.documentElement;

    function applyTheme(name) {
        root.setAttribute("data-theme", name);
        document.querySelectorAll(".theme-dot").forEach(function (dot) {
            dot.classList.toggle("active", dot.dataset.theme === name);
        });
    }

    function saved() {
        try {
            return localStorage.getItem(KEY);
        } catch (e) {
            return null;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyTheme(saved() || "light");

        document.querySelectorAll(".theme-dot").forEach(function (dot) {
            dot.addEventListener("click", function () {
                var name = dot.dataset.theme;
                applyTheme(name);
                try {
                    localStorage.setItem(KEY, name);
                } catch (e) {}
            });
        });
    });
})();