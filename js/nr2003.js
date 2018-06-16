var downloadBtn4K = document.getElementById("download-link-4k"),
	downloadBtnHD = document.getElementById("download-link-hd"),
	downloadBtnSD = document.getElementById("download-link-sd");

downloadBtn4K.addEventListener("click", function(e){
	var downloadType =
	gtag('event', 'download', {
	  'event_category' : 'nr2003',
	  'event_label' : '4k'
	});
});

downloadBtnHD.addEventListener("click", function(e){
	var downloadType =
	gtag('event', 'download', {
	  'event_category' : 'nr2003',
	  'event_label' : 'hd'
	});
});

downloadBtnSD.addEventListener("click", function(e){
	var downloadType =
	gtag('event', 'download', {
	  'event_category' : 'nr2003',
	  'event_label' : 'sd'
	});
});
