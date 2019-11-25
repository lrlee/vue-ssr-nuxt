function kill_port()
{
 port=$1
 #根据端口号查询对应的pid
 pid=$(netstat -nlp | grep :$port | awk '{print $7}' | awk -F"/" '{ print $1 }');
 #杀掉对应的进程，如果pid不存在，则不执行
 if [  -n  "$pid"  ];  then
    kill  -9  $pid;
 fi
}
npm install
kill_port $1
nohup npm run start > out.log 2>&1 &
sleep 3
netstat -lnp|grep $1
