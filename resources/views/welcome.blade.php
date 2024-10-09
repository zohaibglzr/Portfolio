<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Portfolio</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.css" />
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.js"></script>

</head>
<body>
    <div id="app">
        <!-- Vue components will load here -->
        <welcome></welcome>
        <about></about>
        <skills></skills>
        <contact></contact>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
