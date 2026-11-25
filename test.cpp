#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1,3,5,7,9};
    int left = 0;

    int temp[5] = {};
    for(int i = 0; i < 5; i++){
        temp[i] = arr[i];
    }
    for(int i = 4; i > -1; i--){
        arr[left] = temp[i]; 
        left++;
    }
    for(int i = 0 ; i < 5; i++){
        cout << arr[i] << " ";
    }
}
