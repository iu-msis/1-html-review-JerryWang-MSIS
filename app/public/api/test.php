<?php


$num = 2;
$foo = $num. " be";
$bar = "or not " .$num. " be";

echo $foo ." ". $bar. "\n";

echo $num * $num * $num;

#This is a comment

if (true){
    echo "TRUE \n";
} else {
    echo "FALSE \n";
}

while (true){
    break;
}

$arr = [1,1,2,3,5,8];

$arr2 = [
    "first" => "Jerry",
    "second" => "Wang",
    "best" => "student"
];

function printList($someArr){
    echo "<ul>\n";
    foreach($someArr as $key => $val){
        echo "<li>".$key." is ".$val."</li>\n";
    }
    echo "</ul>\n";
}

printList($arr);
printList($arr2);

#Figure out function to encode array as JSON string

$arr3 = array("a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5);
echo json_encode($arr3)."\n";

echo json_encode($arr2,
JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);