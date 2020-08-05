# 오픈API 프로그래밍



## 1. geth명령어
### 노드 정보 확인 (chainId, enode 등등)
`admin.nodeInfo`

### 계정 발급
`personal.newAccount`

### 계정 확인
`eth.accounts`

### 잔고 확인
`eth.getBalance(eth.accounts[0])`

### 마이닝
`miner.start();admin.sleepBlocks(1);miner.stop();`
`miner.start(); miner.stop();`

### 코인베이스 변경
`miner.setEtherbase(eth.accounts[1]);`

### 잔고 ether로 출력
`web3.fromWei((eth.getBalance(eth.accounts[0])),"ether");`

### 거래 발생
`eth.sendTransaction({from:"주소", to:"주소", value:100000});`

### pending되어있는 거래 확인
`txpool.inspect`
(끊고 싶으면 마이닝해주기)

### 주피터에서 특정 명령어만 사용하고싶을 때
`!geth --exec eth.accounts attach http://localhost:8445`  
eth.accounts 저부분만 달라지는것! 파일 열때는 "loadScript('src/exercise1.js')"

## 2. jupyter notebook에서 쓰는 명령어
### 파일저장
`%%writefile src/파일명.js`

### 저장한 파일 실행
`!node src/파일명.js`

### solidity파일 관련 실행
`!solc --abi --bin --gas src/파일명.sol`

### 배포(deploy)시 컨트랙 주소 발생, 사용(use)시 발생한 주소 사용
* 컨트랙 geth배포(echo사용)는 work8 참고
* 이제껏 과제 및 실습은 web3 배포
