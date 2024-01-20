#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    argv = sys.argv
    args_as_ints = [int(arg) for arg in argv[1:]]
    total = sum(args_as_ints)
    print(total)
