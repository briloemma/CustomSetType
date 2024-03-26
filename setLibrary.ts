class CustomSet<T> extends Set<T> {
    intersectWith(otherSet: CustomSet<T>): CustomSet<T> {
        const intersection = new CustomSet<T>();
        for (const elem of this) {
            if (otherSet.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }

    unionWith(otherSet: CustomSet<T>): CustomSet<T> {
        const union = new CustomSet<T>(this);
        for (const elem of otherSet) {
            union.add(elem);
        }
        return union;
    }

    isSubsetOf(otherSet: CustomSet<T>): boolean {
        for (const elem of this) {
            if (!otherSet.has(elem)) {
                return false;
            }
        }
        return true;
    }

    isSupersetOf(otherSet: CustomSet<T>): boolean {
        for (const elem of otherSet) {
            if (!this.has(elem)) {
                return false;
            }
        }
        return true;
    }

    getDifference(otherSet: CustomSet<T>): CustomSet<T> {
        const difference = new CustomSet<T>();
        for (const elem of this) {
            if (!otherSet.has(elem)) {
                difference.add(elem);
            }
        }
        return difference;
    }

    symmetricDifferenceWith(otherSet: CustomSet<T>): CustomSet<T> {
        const difference1 = this.getDifference(otherSet);
        const difference2 = otherSet.getDifference(this);
        return difference1.unionWith(difference2);
    }
}

const set1 = new CustomSet<number>([10, 6, 5]);
const set2 = new CustomSet<number>([3, 4, 5]);

const intersection = set1.intersectWith(set2);
console.log("Intersection:", intersection);

const union = set1.unionWith(set2);
console.log("Union:", union);

console.log("Is set1 a subset of set2?", set1.isSubsetOf(set2));
console.log("Is set1 a superset of set2?", set1.isSupersetOf(set2));

const difference = set1.getDifference(set2);
console.log("Difference:", difference);

const symmetricDifference = set1.symmetricDifferenceWith(set2);
console.log("Symmetric difference:", symmetricDifference);
