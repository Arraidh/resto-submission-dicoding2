const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it("should return the resto that has been added", async () => {
    favoriteResto.putResto({ id: "rqdv5juczeskfw1e867" });
    favoriteResto.putResto({ id: "w9pga3s2tubkfw1e867" });

    expect(await favoriteResto.getResto("rqdv5juczeskfw1e867"));
    expect(await favoriteResto.getResto("w9pga3s2tubkfw1e867"));
    expect(await favoriteResto.getResto(undefined));
  });

  it("should refuse a resto from being added if it does not have the correct property", async () => {
    favoriteResto.putResto({ aProperty: "property" });

    expect(await favoriteResto.getAllRestos()).toEqual([]);
  });

  it("can return all of the restos that have been added", async () => {
    favoriteResto.putResto({ id: "rqdv5juczeskfw1e867" });
    favoriteResto.putResto({ id: "w9pga3s2tubkfw1e867" });

    expect(await favoriteResto.getAllRestos()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
      { id: "w9pga3s2tubkfw1e867" },
    ]);
  });

  it("should remove favorite resto", async () => {
    favoriteResto.putResto({ id: "rqdv5juczeskfw1e867" });
    favoriteResto.putResto({ id: "w9pga3s2tubkfw1e867" });
    favoriteResto.putResto({ id: "uewq1zg2zlskfw1e867" });

    await favoriteResto.deleteResto("rqdv5juczeskfw1e867");

    expect(await favoriteResto.getAllRestos()).toEqual([
      { id: "w9pga3s2tubkfw1e867" },
      { id: "uewq1zg2zlskfw1e867" },
    ]);
  });

  it("should handle request to remove a resto even though the resto has not been added", async () => {
    favoriteResto.putResto({ id: "rqdv5juczeskfw1e867" });
    favoriteResto.putResto({ id: "w9pga3s2tubkfw1e867" });
    favoriteResto.putResto({ id: "uewq1zg2zlskfw1e867" });

    await favoriteResto.deleteResto("ygewwl55ktckfw1e867");

    expect(await favoriteResto.getAllRestos()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
      { id: "w9pga3s2tubkfw1e867" },
      { id: "uewq1zg2zlskfw1e867" },
    ]);
  });
};

export { itActsAsFavoriteRestoModel };
