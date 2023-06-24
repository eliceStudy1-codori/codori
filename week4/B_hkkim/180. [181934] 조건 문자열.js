function solution(ineq, eq, n, m) {
    if(eq==="=" ) if(n===m) return 1; // eq가 =이면 같은지 판별하고 1을 return

    if(ineq==="<") if(Math.max(m,n)===m) return 1; // ineq가 <이면 m이 더 큰 값이므로 m,n보다 m이 클시 1을 return
    if(ineq===">") if(Math.max(m,n)===n) return 1; // ineq가 >이면 n이 더 큰 값이므로 m,n보다 n이 클시 1을 return
    return 0; // 나머지 조건이 안맞을시 0을 return함 
}