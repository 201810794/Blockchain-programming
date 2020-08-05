# Blockchain-programming
2020 summer semester

{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 명령어 정리"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 1. geth"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 노드 정보 확인 (chainId, enode 등등)\n",
    "admin.nodeInfo\n",
    "\n",
    "### 계정 발급\n",
    "personal.newAccount\n",
    "\n",
    "### 계정 확인\n",
    "eth.accounts\n",
    "\n",
    "### 잔고 확인\n",
    "eth.getBalance(eth.accounts[0])\n",
    "\n",
    "### 마이닝\n",
    "miner.start();admin.sleepBlocks(1);miner.stop();\n",
    "miner.start(); miner.stop();\n",
    "\n",
    "### 코인베이스 변경\n",
    "miner.setEtherbase(eth.accounts[1]);\n",
    "\n",
    "### 잔고 ether로 출력\n",
    "web3.fromWei((eth.getBalance(eth.accounts[0])),\"ether\");\n",
    "\n",
    "### 거래 발생\n",
    "eth.sendTransaction({from:\"주소\", to:\"주소\", value:100000});\n",
    "\n",
    "### pending되어있는 거래 확인\n",
    "txpool.inspect\n",
    "(끊고 싶으면 마이닝해주기)\n",
    "\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 주피터에서 특정 명령어만 사용하고싶을 때"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[\"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9\", \"0x81f6c6b03cbab015ea7142a0ac6bccf00aac2407\", \"0x4fc61eddc339a9ee54ba8356770bdb2cf0b2dd68\"]\n"
     ]
    }
   ],
   "source": [
    "!geth --exec eth.accounts attach http://localhost:8445"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "eth.accounts 저부분만 달라지는것! 파일 열때는 \"loadScript('src/exercise1.js')\""
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 2. 주피터에서 쓰는 명령어"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 파일저장\n",
    "%%writefile src/파일명.js\n",
    "\n",
    "### 저장한 파일 실행\n",
    "!node src/파일명.js\n",
    "\n",
    "### solidity파일 관련 실행\n",
    "!solc --abi --bin --gas src/파일명.sol\n",
    "\n",
    "### 배포(deploy)시 컨트랙 주소 발생, 사용(use)시 발생한 주소 사용"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### 컨트랙 geth배포(echo사용)는 work8 참고\n",
    "### 이제껏 과제 및 실습은 web3 배포였음!!"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
