<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Integrate CKeditor to HTML page</title>

	<!-- CSS -->
	<style type="text/css">
	.cke_textarea_inline{
		border: 1px solid black;
	}
	</style>
	<!-- CKEditor -->	
  <script src="./ckeditorHandler.js"></script>
</head>
<body>

	<div id="editor">
    <p>Here goes the initial content of the editor</p>
	</div>

	<h2>Preview</h2>
	<textarea id="preview" style="height:100%;width:500px;min-height:500px">
   
	</textarea>
	<!-- Script -->
	<script type="text/javascript">
		let ckeditorObj =  new CkeditorHandler();
		console.log(ckeditorObj);
		// Initialize CKEditor
		ckeditorObj.initClassicCkeditor();
	</script>
</body>
</html>