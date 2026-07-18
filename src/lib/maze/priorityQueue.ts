interface QueueEntry<T> {
  item: T;
  priority: number;
  order: number;
}

export class PriorityQueue<T> {
  private entries: QueueEntry<T>[] = [];
  private nextOrder = 0;

  enqueue(item: T, priority: number): void {
    const entry = { item, priority, order: this.nextOrder++ };
    this.entries.push(entry);
    this.bubbleUp(this.entries.length - 1);
  }

  dequeue(): { item: T; priority: number } | null {
    if (this.entries.length === 0) {
      return null;
    }

    const root = this.entries[0];
    const last = this.entries.pop();

    if (this.entries.length > 0 && last) {
      this.entries[0] = last;
      this.bubbleDown(0);
    }

    return { item: root.item, priority: root.priority };
  }

  isEmpty(): boolean {
    return this.entries.length === 0;
  }

  private bubbleUp(index: number): void {
    let childIndex = index;

    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2);
      if (this.compare(this.entries[parentIndex], this.entries[childIndex]) <= 0) {
        break;
      }

      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
    }
  }

  private bubbleDown(index: number): void {
    let parentIndex = index;

    while (true) {
      const leftIndex = parentIndex * 2 + 1;
      const rightIndex = leftIndex + 1;
      let smallestIndex = parentIndex;

      if (
        leftIndex < this.entries.length &&
        this.compare(this.entries[leftIndex], this.entries[smallestIndex]) < 0
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex < this.entries.length &&
        this.compare(this.entries[rightIndex], this.entries[smallestIndex]) < 0
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === parentIndex) {
        break;
      }

      this.swap(parentIndex, smallestIndex);
      parentIndex = smallestIndex;
    }
  }

  private compare(a: QueueEntry<T>, b: QueueEntry<T>): number {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }

    return a.order - b.order;
  }

  private swap(a: number, b: number): void {
    const temp = this.entries[a];
    this.entries[a] = this.entries[b];
    this.entries[b] = temp;
  }
}
