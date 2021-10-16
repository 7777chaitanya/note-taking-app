export default function truncate(input){
if(input.length<50){
    return input;
}
else{
    return input.substring(0,50)+"...";
}
}