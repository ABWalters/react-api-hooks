export class OffsetPagination {
  constructor(data, params, updateParams, pageSize) {
    this.data = data;
    this.params = params;
    this.updateParams = updateParams;
    this.pageSize = pageSize;
  }

  onNext = () => this.updateParams(
    { startIndex: (this.params.startIndex || 0) + this.pageSize });
  onPrevious = () => {
    console.log('onPrev!');
    return this.updateParams({
      startIndex: (this.params.startIndex || this.pageSize) - this.pageSize
    });
  };
  hasPreviousPage = () => this.params.startIndex || 0 > 0;
  hasNextPage = () => this.data.length === this.pageSize;
  getPageCnt = () => Math.round((this.params.startIndex || 0) / this.pageSize) +
    1;
}
