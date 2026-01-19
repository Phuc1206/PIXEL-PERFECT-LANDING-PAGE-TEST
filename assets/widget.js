(function () {
	const slot = document.getElementById("clinicians-choice");
	if (!slot) return;

	const iframe = document.createElement("iframe");
	iframe.src = "badge.html";
	iframe.style.width = "100%";
	iframe.style.display = "block"; // THÊM DÒNG NÀY: Loại bỏ khoảng trống inline
	iframe.style.height = "90px"; // Đảm bảo set chiều cao khớp với nội dung badge.html
	iframe.style.border = "none";
	iframe.style.margin = "0";
	iframe.style.padding = "0"; // Đảm bảo không có padding
	iframe.style.background = "transparent";
	iframe.frameBorder = 0;

	slot.appendChild(iframe);
})();
