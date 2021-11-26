export default function truncate(input, maxLength){
if(input.length<maxLength){
    return input;
}
else{
    return input.substring(0,maxLength)+"...";
}
}