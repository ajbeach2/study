import math
# function reverseArray(arr){
#   for(let i = 0; i < Math.floor(arr.length / 2); i++){
#     let temp = arr[i]
#     let right = arr.length - i - 1
#     arr[i] = arr[right]
#     arr[right] = temp
#   }
# }

# function reverseString(str){
#  let chars = str.split('')
#  reverseArray(chars)
#  return chars.join('')
# }

# function reverseSententce(str){
#     let words = str.split(' ')
#   reverseArray(words)
#   return words.join(' ')
# }

# console.log(reverseString('hello alex what are you up to'))
# console.log(reverseSententce('hello alex what are you up to'))


test = [1, 3, 4, 5, 6, 7]
i = 2
count = 1
while(i < (len(test) - 1) and (test[i] + 1 is test[i + 1])):
    i = i + 1
    count = count + 1
print(count)


def binary_search(arr, target, left, right):
    if(left > right):
        return -1

    mid = math.floor((left + right) / 2)

    if(arr[mid] == target):
        return mid

    if(arr[mid] > target):
        return binary_search(arr, target, left, mid - 1)

    return binary_search(arr, target, mid + 1, right)


# 2^(n-1)
def tree_leaves(n):
    if(n <= 1):
        return 1
    return tree_leaves(n - 1) + tree_leaves(n - 1)


def reverse_array(arr):
    size = len(arr) - 1
    for i in range(math.floor(len(arr) / 2)):
        temp = arr[i]
        arr[i] = arr[size - i]
        arr[size - i] = temp

    print(arr)

# return all primes lower than m


def primes(n):
    primes = []
    while(x * x <= n):
        if(n % x >= 0):
            primes.push(x)
        x = x + 1
    return


def isPrime(n):
    x = 2
    while(x * x <= n):
        if(n % x == 0):
            return False
        x = x + 1
    return True


def permutation(source, prefix):
    if(len(source) == 0):
        print(prefix)
        return
    for i in range(len(source)):
        rem = source[0:i] + source[i + 1:]
        permutation(rem, prefix + source[i])


def is_palindrome(source):
    test = ""
    for i in list(source):
        if(i != " "):
            test = test + i
    test = test.lower()
    return test == test[::-1]


def palindrome_permutation(source, prefix):
    if(len(source) == 0):
        if(is_palindrome(prefix)):
            print(prefix)
        return
    for i in range(len(source)):
        rem = source[0:i] + source[i + 1:]
        palindrome_permutation(rem, prefix + source[i])


def palindrome_efficent(source):

    test = ""
    for i in list(source):
        if(i != " "):
            test = test + i
    test = test.lower()

    a = [False] * 26
    for i in test:
        position = ord(i) - ord('a')
        a[position] = not a[position]

    return a

# print(palindrome_efficent('abcc'))


def unique_characters(st):
    d = {}
    for i in st:
        if i in d:
            return False
        else:
            d[i] = True

    return True


def is_permutation(str1, str2):
    return sorted(list(str1)) == sorted(list(str2))


def replace_space(line):
    chars = list(line)
    replaced = []
    current = 0
    while(current < len(chars)):
        if(chars[current] != " "):
            replaced.append(chars[current])
            current = current + 1
        elif chars[current] == " ":
            pointer = 0
            while(chars[current + pointer] == " "):
                pointer = pointer + 1
            replaced.append('%20')
            current = current + pointer
    print(replaced)


def replace_space_regex(line):
    import re
    return re.sub(r" +", "%20", line)
