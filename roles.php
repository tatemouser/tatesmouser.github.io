<?php
// Here, $roles is an array of strings for script header  file
$roles = array(
    "I am a Software Developer^1000",
    "I am a Database Developer^1000",
    "I am a Student^1000",
    "I am a UI/UX Designer^1000",
    "I am a Frontend Engineer^1000",
    "I am a Web Developer^1000"
);

// Output the role strings as JSON
echo json_encode($roles);
?>
