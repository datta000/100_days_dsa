class Solution {
    public:
        vector<vector<int>> generate(int numRows) {
            vector<vector<int>> arr;
            for(int i=0; i<numRows;++i ){
                vector<int> row(i+1,1);
                for(int j=1; j<i;++j ){
                        row[j]=arr[i-1][j-1]+arr[i-1][j];
                }   
                arr.push_back(row);
            }
            return arr ;
        }
    };  