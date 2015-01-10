//J MNEMONIC
function j(memory){
  programCounter=memory;
}
//JEQ MNEMONIC
function jeq(memory){
  if(statusWord(CC)==1)//1 means =
  programCounter=memory;
}
//JGT MNEMONIC
function jgt(memory){
  if(statusWord(CC)==3)//3 means >
  programCounter=memory;
}
//JLT MNEMONIC
function jlt(memory){
  if(statusWord(CC)==2)//2 means <
  programCounter=memory;
}
//JSUB MNEMONIC
function jsub(memory){
  linkage=programCounter;
  programCounter=memory;
}
//LDA MNEMONIC
function lda(memory){
  accumulator=memory;
}
//LDCH MNEMONIC
function ldch(memory){
  accumulator=memory & 511;
}
  
//MUL MNEUMONIC
function mul(memory){
	accumulator=accumulator*memory
}

//OR MNEUMONIC
function or(memory){
	accumulator=accumulator|memory
}	

//STA MNEUMONIC
function sta(memory){
  memory=accumulator
}

//STCH MNEUMONIC
function stch(memory){
  memory=accumulator
}     

//STL MNEUMONIC
function stl(memory){
  memory=linkage
}

//STSW MNEUMONICS
function stsw(memory){
  memory=status word
}  

//STX MNEUMONIC
function stx(memory){
  memory=indexRegister
} 

//SUB MNEUMONIC
function sub(memory){
  accumulator=accumulator-memory
}   
